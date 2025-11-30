---
title: CMsgTEBeamEntPoint
---

# Interface CMsgTEBeamEntPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEBeamEntPoint : ITypedProtobuf<CMsgTEBeamEntPoint>, INativeHandle, INetMessage<CMsgTEBeamEntPoint>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEBeamEntPoint>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEBeamEntPoint>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/protobufdefinitions/cmsgtebasebeam)

### End

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L30)

```csharp
Vector End { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Endentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L24)

```csharp
uint Endentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Start

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L27)

```csharp
Vector Start { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Startentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEntPoint.cs#L21)

```csharp
uint Startentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

