const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  
  return new Date(date).toLocaleDateString('pt-PT', options);
}
export default formatDate;