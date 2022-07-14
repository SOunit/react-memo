import React, { useCallback, useEffect, useState } from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";
import { getData } from "../data/data";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/productsSlice";

const ITEMS_PER_PAGE = 3;

const Pagination = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    count: 0,
    skip: 0,
    limit: ITEMS_PER_PAGE,
  });
  const { count, skip, limit } = pagination;

  const fetchTestData = useCallback(async () => {
    const data = await getData({ skip, limit });

    console.log(data);
    dispatch(productsActions.setProducts(data.data));

    setPagination((prevState) => ({ ...prevState, count: data.count }));
  }, [limit, skip, dispatch]);

  const handlePageChange = (event, page) => {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const limit = skip + ITEMS_PER_PAGE;

    setPagination((prevState) => ({ ...prevState, skip, limit }));
  };

  useEffect(() => {
    fetchTestData();
  }, [fetchTestData]);

  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{ m: "20px 0px" }}
    >
      <MuiPagination
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default Pagination;
