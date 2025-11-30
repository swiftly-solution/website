---
title: CMsgAdjustEquipSlots
---

# Interface CMsgAdjustEquipSlots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgAdjustEquipSlots.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgAdjustEquipSlots : ITypedProtobuf<CMsgAdjustEquipSlots>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgAdjustEquipSlots>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChangeNum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgAdjustEquipSlots.cs#L16)

```csharp
uint ChangeNum { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Slots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgAdjustEquipSlots.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgAdjustEquipSlot> Slots { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgAdjustEquipSlot](/docs/api/protobufdefinitions/cmsgadjustequipslot)>

