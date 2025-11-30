---
title: CPredictionEvent_Teleport
---

# Interface CPredictionEvent_Teleport

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Teleport.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPredictionEvent_Teleport : ITypedProtobuf<CPredictionEvent_Teleport>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CPredictionEvent_Teleport>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Angles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Teleport.cs#L16)

```csharp
QAngle Angles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### DropToGroundRange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Teleport.cs#L19)

```csharp
float DropToGroundRange { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPredictionEvent_Teleport.cs#L13)

```csharp
Vector Origin { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

