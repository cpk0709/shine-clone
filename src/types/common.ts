export type RevalidateType = 'popup' | 'notice' | 'event-period' | 'event';

export interface RevalidateRequest {
  secret: string;
  type: RevalidateType;
  id?: string;
}
