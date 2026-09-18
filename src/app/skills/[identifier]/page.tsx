import React from 'react'
type Params = {
  params: Promise<{
    identifier: string;
  }>;
};
const Detailspage = async({params}:Params) => {
    const {identifier} = await params
  return (
    <div>{identifier}</div>
  )
}

export default Detailspage