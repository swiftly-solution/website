---
title: CNETMsg_SpawnGroup_ManifestUpdate
---

# Interface CNETMsg_SpawnGroup_ManifestUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_ManifestUpdate.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNETMsg_SpawnGroup_ManifestUpdate : ITypedProtobuf<CNETMsg_SpawnGroup_ManifestUpdate>, INativeHandle, INetMessage<CNETMsg_SpawnGroup_ManifestUpdate>, IDisposable
```

#### Implements

- [ITypedProtobuf<CNETMsg_SpawnGroup_ManifestUpdate>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CNETMsg_SpawnGroup_ManifestUpdate>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Manifestincomplete

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_ManifestUpdate.cs#L24)

```csharp
bool Manifestincomplete { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Spawngrouphandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_ManifestUpdate.cs#L18)

```csharp
uint Spawngrouphandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Spawngroupmanifest

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_ManifestUpdate.cs#L21)

```csharp
byte[] Spawngroupmanifest { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

