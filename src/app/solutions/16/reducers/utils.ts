export function paginate(collection: any[], page: number, pageSize: number) {
  return collection.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
}
