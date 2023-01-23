import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'dgshdjseds',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
      tenant: 'nathu',
    };
  }
}
