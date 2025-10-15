---
title: CItem
---

```csharp
public interface CItem : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CItem>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivateWhenAtRest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L21)

```csharp
ref bool ActivateWhenAtRest { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnCacheInteraction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L23)

```csharp
CEntityIOOutput OnCacheInteraction { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnGlovePulled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L25)

```csharp
CEntityIOOutput OnGlovePulled { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPlayerPickup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L19)

```csharp
CEntityIOOutput OnPlayerPickup { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnPlayerTouch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L17)

```csharp
CEntityIOOutput OnPlayerTouch { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OriginalSpawnAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L29)

```csharp
ref QAngle OriginalSpawnAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### OriginalSpawnOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L27)

```csharp
ref Vector OriginalSpawnOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PhysStartAsleep

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CItem.cs#L31)

```csharp
ref bool PhysStartAsleep { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

