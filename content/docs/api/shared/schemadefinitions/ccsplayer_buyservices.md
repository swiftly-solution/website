---
title: CCSPlayer_BuyServices
---

```csharp
public interface CCSPlayer_BuyServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_BuyServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### SellbackPurchaseEntries

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_BuyServices.cs#L17)

```csharp
ref CUtlVector<SellbackPurchaseEntry_t> SellbackPurchaseEntries { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SellbackPurchaseEntry_t](/docs/api/shared/schemadefinitions/sellbackpurchaseentry_t)>

## Methods

### SellbackPurchaseEntriesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_BuyServices.cs#L19)

```csharp
void SellbackPurchaseEntriesUpdated()
```

