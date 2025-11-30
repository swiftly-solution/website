---
title: CCSPlayer_BuyServices
---

# Interface CCSPlayer_BuyServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_BuyServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_BuyServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CCSPlayer_BuyServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_BuyServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### SellbackPurchaseEntries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_BuyServices.cs#L18)

```csharp
ref CUtlVector<SellbackPurchaseEntry_t> SellbackPurchaseEntries { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SellbackPurchaseEntry_t](/docs/api/schemadefinitions/sellbackpurchaseentry_t)>

## Methods

### SellbackPurchaseEntriesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_BuyServices.cs#L20)

```csharp
void SellbackPurchaseEntriesUpdated()
```

