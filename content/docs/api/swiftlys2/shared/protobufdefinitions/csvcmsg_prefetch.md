---
title: CSVCMsg_Prefetch
---

```csharp
public interface CSVCMsg_Prefetch : ITypedProtobuf<CSVCMsg_Prefetch>, INativeHandle, INetMessage<CSVCMsg_Prefetch>, IDisposable
```

#### Implements

## Properties

**ResourceType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Prefetch.cs#L21)

```csharp
PrefetchType ResourceType { get; set; }
```

#### Property Value

- [PrefetchType](/docs/api/shared/protobufdefinitions/prefetchtype)

**SoundIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_Prefetch.cs#L18)

```csharp
int SoundIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

