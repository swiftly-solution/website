---
title: IOnMovementServicesRunCommandHookEvent
---

# Interface IOnMovementServicesRunCommandHookEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L9)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when the movement services run command hook is triggered.

```csharp
public interface IOnMovementServicesRunCommandHookEvent
```

## Properties

### ButtonState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L18)

The button state.

```csharp
CInButtonState ButtonState { get; }
```

#### Property Value

- [CInButtonState](/docs/api/schemadefinitions/cinbuttonstate)

### MovementServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L14)

The movement services.

```csharp
CCSPlayer_MovementServices MovementServices { get; }
```

#### Property Value

- [CCSPlayer_MovementServices](/docs/api/schemadefinitions/ccsplayer_movementservices)

### UserCmdPB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnMovementServicesRunCommandHookEvent.cs#L22)

The user command protobuf.

```csharp
CSGOUserCmdPB UserCmdPB { get; }
```

#### Property Value

- [CSGOUserCmdPB](/docs/api/protobufdefinitions/csgousercmdpb)

