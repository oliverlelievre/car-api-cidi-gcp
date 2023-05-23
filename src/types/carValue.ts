export interface CarValueService {
  calculateCarValue(model: string, year: number): number | null;
}