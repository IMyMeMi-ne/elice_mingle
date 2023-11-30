import tw, { styled } from 'twin.macro';

export const Content = styled.div`
  ${tw`flex justify-between items-center`}
  padding: 70px 0;
`;
export const Divider = styled.div`
  ${tw`mx-auto h-[1px]`}
  width: 98%;
  border: 1px solid #ccc;
`;
export const ModifyBtn = styled.button`
  position: relative;
  bottom: 83%;
  left: 70%;
  background-color: #9b59b6;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  color: white;
`;

export const DeleteBtn = styled.button`
  position: relative;
  bottom: 83%;
  left: 70%;
  background-color: #9b59b6;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  color: white;
  margin-right: 50px;
`;
