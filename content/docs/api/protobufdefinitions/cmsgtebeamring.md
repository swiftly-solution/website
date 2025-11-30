---
title: CMsgTEBeamRing
---

# Interface CMsgTEBeamRing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamRing.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEBeamRing : ITypedProtobuf<CMsgTEBeamRing>, INativeHandle, INetMessage<CMsgTEBeamRing>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEBeamRing>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEBeamRing>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamRing.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/protobufdefinitions/cmsgtebasebeam)

### Endentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamRing.cs#L24)

```csharp
uint Endentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Startentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamRing.cs#L21)

```csharp
uint Startentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

