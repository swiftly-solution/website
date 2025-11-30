---
title: CCSPredictionEvent_AddAimPunch
---

# Interface CCSPredictionEvent_AddAimPunch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPredictionEvent_AddAimPunch : ITypedProtobuf<CCSPredictionEvent_AddAimPunch>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCSPredictionEvent_AddAimPunch>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### PunchAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L13)

```csharp
QAngle PunchAngle { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### WhenTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L16)

```csharp
uint WhenTick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### WhenTickFrac

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L19)

```csharp
float WhenTickFrac { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

