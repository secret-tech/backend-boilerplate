declare interface RegistrationResult {
  id: string;
  email: string;
  login: string;
}

declare interface TenantRegistrationResult extends RegistrationResult {

}

declare interface UserRegistrationResult extends RegistrationResult {
  tenant: string;
  sub: string;
  scope?: any;
}

declare interface VerificationResult {
  id: string;
  login: string;
  jti: string;
  iat: number;
  aud: string;
}

declare interface TenantVerificationResult extends VerificationResult {
  isTenant: boolean;
}

declare interface UserVerificationResult extends VerificationResult {
  deviceId: string;
  sub: string;
  exp: number;
  scope?: any;
}

declare interface UserVerificationResponse {
  decoded: UserVerificationResult;
}

declare interface TenantVerificationResponse {
  decoded: TenantVerificationResult;
}

declare interface AuthUserData {
  email: string;
  login: string;
  password: string;
  sub: string;
  scope?: any;
}

declare interface UserLoginData {
  login: string;
  password: string;
  deviceId: string;
}

declare interface AccessTokenResponse {
  accessToken: string;
}

declare interface AuthClientInterface {
  tenantToken: string;
  registerTenant(email: string, password: string): Promise<TenantRegistrationResult>;
  loginTenant(email: string, password: string): Promise<AccessTokenResponse>;
  verifyTenantToken(token: string): Promise<TenantVerificationResult>;
  logoutTenant(token: string): Promise<void>;
  createUser(data: AuthUserData): Promise<UserRegistrationResult>;
  loginUser(data: UserLoginData): Promise<AccessTokenResponse>;
  verifyUserToken(token: string): Promise<UserVerificationResult>;
  logoutUser(token: string): Promise<void>;
  deleteUser(login: string): Promise<void>;
}

declare interface Result {
  status: number;
}

declare interface InitiateResult extends Result {
  verificationId: string;
  attempts: number;
  expiredOn: number;
  method: string;
  code?: string;
  totpUri?: string;
  qrPngDataUri?: string;
}

declare interface ValidationResult extends Result {
  data?: {
    verificationId: string;
    consumer: string;
    expiredOn: number;
    attempts: number;
    payload?: any;
  };
}
