---
title: CCSUsrMsg_SendPlayerLoadout_LoadoutItem
---

```csharp
public interface CCSUsrMsg_SendPlayerLoadout_LoadoutItem : ITypedProtobuf<CCSUsrMsg_SendPlayerLoadout_LoadoutItem>, INativeHandle
```

- Implements

## Properties

### **EconItem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L13)

```csharp
CEconItemPreviewDataBlock EconItem { get; }
```

- Property Value

- [CEconItemPreviewDataBlock](/docs/api/shared/protobufdefinitions/ceconitempreviewdatablock)

### **Slot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L19)

```csharp
int Slot { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Team** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerLoadout_LoadoutItem.cs#L16)

```csharp
int Team { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

