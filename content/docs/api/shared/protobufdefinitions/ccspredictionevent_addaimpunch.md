---
title: CCSPredictionEvent_AddAimPunch
---

```csharp
public interface CCSPredictionEvent_AddAimPunch : ITypedProtobuf<CCSPredictionEvent_AddAimPunch>, INativeHandle
```

#### Implements

## Properties

**PunchAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L13)

```csharp
QAngle PunchAngle { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**WhenTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L16)

```csharp
uint WhenTick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**WhenTickFrac** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSPredictionEvent_AddAimPunch.cs#L19)

```csharp
float WhenTickFrac { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

