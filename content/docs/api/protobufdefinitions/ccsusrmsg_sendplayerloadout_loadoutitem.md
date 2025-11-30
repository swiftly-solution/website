---
title: CCSUsrMsg_SendPlayerLoadout_LoadoutItem
---

# Interface CCSUsrMsg_SendPlayerLoadout_LoadoutItem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_SendPlayerLoadout_LoadoutItem : ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout_LoadoutItem>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout_LoadoutItem>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EconItem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L13)

```csharp
CEconItemPreviewDataBlock EconItem { get; }
```

#### Property Value

- [CEconItemPreviewDataBlock](/docs/api/protobufdefinitions/ceconitempreviewdatablock)

### Slot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L19)

```csharp
int Slot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Team

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L16)

```csharp
int Team { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

