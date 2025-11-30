---
title: EventUgcMapDownloadError
---

# Interface EventUgcMapDownloadError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventUgcMapDownloadError.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "ugc_map_download_error"

```csharp
public interface EventUgcMapDownloadError : IGameEvent<EventUgcMapDownloadError>
```

#### Implements

- [IGameEvent<EventUgcMapDownloadError>](/docs/api/gameevents/igameeventt)

## Properties

### ErrorCode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventUgcMapDownloadError.cs#L26)

type: long

```csharp
int ErrorCode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PublishedFileId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventUgcMapDownloadError.cs#L21)

type: uint64

```csharp
ulong PublishedFileId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

