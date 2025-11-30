---
title: CMsgTEBeamPoints
---

# Interface CMsgTEBeamPoints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEBeamPoints : ITypedProtobuf<CMsgTEBeamPoints>, INativeHandle, INetMessage<CMsgTEBeamPoints>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEBeamPoints>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEBeamPoints>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/protobufdefinitions/cmsgtebasebeam)

### End

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L24)

```csharp
Vector End { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Start

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamPoints.cs#L21)

```csharp
Vector Start { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

