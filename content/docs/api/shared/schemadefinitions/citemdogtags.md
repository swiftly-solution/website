---
title: CItemDogtags
---

```csharp
public interface CItemDogtags : CItem, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CItem>, ISchemaClass<CItemDogtags>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### KillingPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemDogtags.cs#L18)

```csharp
ref CHandle<CCSPlayerPawn> KillingPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### OwningPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemDogtags.cs#L16)

```csharp
ref CHandle<CCSPlayerPawn> OwningPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

## Methods

### KillingPlayerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemDogtags.cs#L21)

```csharp
void KillingPlayerUpdated()
```

### OwningPlayerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItemDogtags.cs#L20)

```csharp
void OwningPlayerUpdated()
```

