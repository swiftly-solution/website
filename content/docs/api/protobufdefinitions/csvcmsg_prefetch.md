---
title: CSVCMsg_Prefetch
---

# Interface CSVCMsg_Prefetch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Prefetch.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_Prefetch : ITypedProtobuf<CSVCMsg_Prefetch>, INativeHandle, INetMessage<CSVCMsg_Prefetch>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_Prefetch>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_Prefetch>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### ResourceType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Prefetch.cs#L21)

```csharp
PrefetchType ResourceType { get; set; }
```

#### Property Value

- [PrefetchType](/docs/api/protobufdefinitions/prefetchtype)

### SoundIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Prefetch.cs#L18)

```csharp
int SoundIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

