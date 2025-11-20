---
title: IOnMovementServicesRunCommandHookEvent
---

```csharp
public interface IOnMovementServicesRunCommandHookEvent
```

## Properties

### ButtonState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L18)

```csharp
CInButtonState ButtonState { get; }
```

#### Property Value

- [CInButtonState](/docs/api/shared/schemadefinitions/cinbuttonstate)

### MovementServices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L14)

```csharp
CCSPlayer_MovementServices MovementServices { get; }
```

#### Property Value

- [CCSPlayer_MovementServices](/docs/api/shared/schemadefinitions/ccsplayer_movementservices)

### UserCmdPB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L22)

```csharp
CSGOUserCmdPB UserCmdPB { get; }
```

#### Property Value

- [CSGOUserCmdPB](/docs/api/shared/protobufdefinitions/csgousercmdpb)

