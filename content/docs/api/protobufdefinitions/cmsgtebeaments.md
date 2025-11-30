---
title: CMsgTEBeamEnts
---

# Interface CMsgTEBeamEnts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEnts.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEBeamEnts : ITypedProtobuf<CMsgTEBeamEnts>, INativeHandle, INetMessage<CMsgTEBeamEnts>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEBeamEnts>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEBeamEnts>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEnts.cs#L18)

```csharp
CMsgTEBaseBeam Base { get; }
```

#### Property Value

- [CMsgTEBaseBeam](/docs/api/protobufdefinitions/cmsgtebasebeam)

### Endentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEnts.cs#L24)

```csharp
uint Endentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Startentity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEBeamEnts.cs#L21)

```csharp
uint Startentity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

