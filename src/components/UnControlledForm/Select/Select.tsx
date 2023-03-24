type IProps = {
  refSelect: React.RefObject<HTMLSelectElement>;
};

const Select = ({ refSelect }: IProps) => {
  return (
    <select name="country" ref={refSelect}>
      <option value="Belarus">Беларусь</option>
      <option value="Ukraine">Украина</option>
      <option value="Latvia">Латвия</option>
    </select>
  );
};

export default Select;
