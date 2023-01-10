import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAuthValue } from '../../Redux/Slice/AuthSlice';

export default function Posts() {
  const data = useSelector((state) => state.auth.data);
  console.log("🚀 ~ file: index.js:7 ~ Posts ~ data", data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthValue());
  }, []);
  return (
    <div>Posts</div>
  )
}
