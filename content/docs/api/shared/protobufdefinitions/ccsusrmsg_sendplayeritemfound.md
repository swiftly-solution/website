---
title: CCSUsrMsg_SendPlayerItemFound
---

```csharp
public interface CCSUsrMsg_SendPlayerItemFound : ITypedProtobuf<CCSUsrMsg_SendPlayerItemFound>, INativeHandle, INetMessage<CCSUsrMsg_SendPlayerItemFound>, IDisposable
```

#### Implements

## Properties

### **Iteminfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemFound.cs#L18)

```csharp
CEconItemPreviewDataBlock Iteminfo { get; }
```

#### Property Value

- [CEconItemPreviewDataBlock](/docs/api/shared/protobufdefinitions/ceconitempreviewdatablock)

### **Playerslot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SendPlayerItemFound.cs#L21)

```csharp
int Playerslot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

