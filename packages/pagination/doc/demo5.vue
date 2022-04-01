<!-- html -->
<template>
  <m-pagination
    :total="200"
    :current="1"
    :pageSize="10"
    :maxSize="8"
  ></m-pagination>
  <m-pagination
    :total="1000"
    :current="1"
    :pageSize="20"
    :maxSize="20"
  ></m-pagination>
</template>