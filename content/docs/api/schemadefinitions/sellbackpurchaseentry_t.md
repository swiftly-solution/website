---
title: SellbackPurchaseEntry_t
---

# Interface SellbackPurchaseEntry_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface SellbackPurchaseEntry_t : ISchemaClass<SellbackPurchaseEntry_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<SellbackPurchaseEntry_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Cost

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L20)

```csharp
ref int Cost { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L18)

```csharp
ref ushort DefIdx { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Item

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L26)

```csharp
ref CHandle<CEntityInstance> Item { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)>

### PrevArmor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L22)

```csharp
ref int PrevArmor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrevHelmet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L24)

```csharp
ref bool PrevHelmet { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CostUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L29)

```csharp
void CostUpdated()
```

### DefIdxUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L28)

```csharp
void DefIdxUpdated()
```

### ItemUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L32)

```csharp
void ItemUpdated()
```

### PrevArmorUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L30)

```csharp
void PrevArmorUpdated()
```

### PrevHelmetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L31)

```csharp
void PrevHelmetUpdated()
```

