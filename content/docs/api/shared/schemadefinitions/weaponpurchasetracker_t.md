---
title: WeaponPurchaseTracker_t
---

```csharp
public interface WeaponPurchaseTracker_t : ISchemaClass<WeaponPurchaseTracker_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### WeaponPurchases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WeaponPurchaseTracker_t.cs#L18)

```csharp
ref CUtlVector<WeaponPurchaseCount_t> WeaponPurchases { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[WeaponPurchaseCount_t](/docs/api/shared/schemadefinitions/weaponpurchasecount_t)>

## Methods

### WeaponPurchasesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WeaponPurchaseTracker_t.cs#L20)

```csharp
void WeaponPurchasesUpdated()
```

