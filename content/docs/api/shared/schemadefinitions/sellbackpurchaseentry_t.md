---
title: SellbackPurchaseEntry_t
---

```csharp
public interface SellbackPurchaseEntry_t : ISchemaClass<SellbackPurchaseEntry_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Cost

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L19)

```csharp
ref int Cost { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L17)

```csharp
ref ushort DefIdx { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Item

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L25)

```csharp
ref CHandle<CEntityInstance> Item { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### PrevArmor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L21)

```csharp
ref int PrevArmor { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PrevHelmet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L23)

```csharp
ref bool PrevHelmet { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CostUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L28)

```csharp
void CostUpdated()
```

### DefIdxUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L27)

```csharp
void DefIdxUpdated()
```

### ItemUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L31)

```csharp
void ItemUpdated()
```

### PrevArmorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L29)

```csharp
void PrevArmorUpdated()
```

### PrevHelmetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/SellbackPurchaseEntry_t.cs#L30)

```csharp
void PrevHelmetUpdated()
```

