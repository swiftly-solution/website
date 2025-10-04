---
title: CMsgAdjustEquipSlots
---

```csharp
public interface CMsgAdjustEquipSlots : ITypedProtobuf<CMsgAdjustEquipSlots>, INativeHandle
```

#### Implements

## Properties

**ChangeNum** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgAdjustEquipSlots.cs#L16)

```csharp
uint ChangeNum { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Slots** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgAdjustEquipSlots.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgAdjustEquipSlot> Slots { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgAdjustEquipSlot](/docs/api/shared/protobufdefinitions/cmsgadjustequipslot)>

