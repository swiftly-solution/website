---
title: CMsgGCBannedWord
---

# Interface CMsgGCBannedWord

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWord.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCBannedWord : ITypedProtobuf<CMsgGCBannedWord>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCBannedWord>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Word

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWord.cs#L19)

```csharp
string Word { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### WordId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWord.cs#L13)

```csharp
uint WordId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### WordType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCBannedWord.cs#L16)

```csharp
GC_BannedWordType WordType { get; set; }
```

#### Property Value

- [GC_BannedWordType](/docs/api/protobufdefinitions/gc_bannedwordtype)

