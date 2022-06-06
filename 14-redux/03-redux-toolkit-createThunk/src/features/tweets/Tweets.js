import React, { useState } from "react";
import {
  Flex,
  Input,
  IconButton,
  Wrap,
  WrapItem,
  Stack,
  Skeleton,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "@chakra-ui/icons";
import { TwitterTweetEmbed } from "react-twitter-embed";

import MaxResults from "../maxResults/MaxResults";
// import { findTweets } from "./findTweets";
import { fetchTweetsThunk } from "./tweetsSlice";

const Tweets = () => {
  const [searchValue, setSearchValue] = useState("");
  //   const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { tweets, isLoading, error } = useSelector((state) => state.tweets);
  const maxResults = useSelector((state) => state.maxResults);

  const handleSubmit = async () => {
    if (searchValue) {
      //   const data = await findTweets(searchValue, 5);
      //   setData(data);
      dispatch(fetchTweetsThunk({ searchValue, maxResults }));
      setSearchValue("");
    }
  };

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>An Error Occurred!</AlertTitle>
        <AlertDescription>
          Unable to fetch tweets. Please try again later.
        </AlertDescription>
        <CloseButton position={"absolute"} right="8px" top="8px" />
      </Alert>
    );
  }

  return (
    <>
      <Flex alignItems={"center"}>
        <Input
          placeholder="Enter a keyword or hashtag to search"
          size="lg"
          mr={3}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton
          icon={<SearchIcon />}
          colorScheme="twitter"
          aria-label="Search Twitter"
          onClick={handleSubmit}
        />
      </Flex>

      <MaxResults />

      {isLoading && (
        <Stack mt={5}>
          <Skeleton height={"20px"} />
          <Skeleton height={"20px"} />
          <Skeleton height={"20px"} />
        </Stack>
      )}

      <Wrap mt={5}>
        {tweets &&
          tweets.map((tweet) => (
            <WrapItem key={tweet.id}>
              <TwitterTweetEmbed tweetId={tweet.id} />
            </WrapItem>
          ))}
      </Wrap>
    </>
  );
};

export default Tweets;
