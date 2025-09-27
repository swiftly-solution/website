---
title: CPhysImpact
---

```csharp
public interface CPhysImpact : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPhysImpact>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Damage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysImpact.cs#L16)

```csharp
ref float Damage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DirectionEntityName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysImpact.cs#L20)

```csharp
ref CUtlSymbolLarge DirectionEntityName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**Distance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPhysImpact.cs#L18)

```csharp
ref float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

