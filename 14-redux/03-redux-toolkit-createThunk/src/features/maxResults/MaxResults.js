import React from "react";
import { Flex, Stack, RadioGroup, Radio, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setMaxResult } from "./maxResultsSlice";

const MaxResults = () => {
  const dispatch = useDispatch();
  const currMaxResults = useSelector((state) => state.maxResults);

  const handleChange = (val) => {
      dispatch(setMaxResult(val))
  };

  return (
    <Flex my={4} justifyContent="center">
      <Text mr={3}>Number of results:</Text>
      <RadioGroup defaultValue={5} onChange={handleChange} value={currMaxResults}>
        <Stack spacing={4} direction="row">
          <Radio value="5">5 tweets</Radio>
          <Radio value="8">8 tweets</Radio>
          <Radio value="10">10 tweets</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default MaxResults;
