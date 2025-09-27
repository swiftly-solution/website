---
title: IEntitySystemService
---

```csharp
public interface IEntitySystemService
```

## Methods

**CreateEntity<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L16)

```csharp
T CreateEntity<T>() where T : class, ISchemaClass<T>
```

#### Returns

- T - Created entity.

#### Type Parameters

- **T**:  - Entity type.

#### Exceptions

- [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) - Thrown when failed to create entity by class or class doesn't have a designer name.

**CreateEntityByDesignerName<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L25)

```csharp
T CreateEntityByDesignerName<T>(string designerName) where T : ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Designer name.

#### Returns

- T - Created entity.

#### Type Parameters

- **T**:  - Entity type.

#### Exceptions

- [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) - Thrown when failed to create entity by designer name or designer name is invalid.

**GetAllEntities()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L45)

```csharp
IEnumerable<CEntityInstance> GetAllEntities()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)> - All entities.

**GetAllEntitiesByClass<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L52)

```csharp
IEnumerable<T> GetAllEntitiesByClass<T>() where T : class, ISchemaClass<T>
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by class.

#### Type Parameters

- **T**:  - Entity type.

**GetAllEntitiesByDesignerName<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L60)

```csharp
IEnumerable<T> GetAllEntitiesByDesignerName<T>(string designerName) where T : class, ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Designer name.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by designer name.

#### Type Parameters

- **T**:  - Entity type.

**GetGameRules()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L39)

```csharp
CCSGameRules? GetGameRules()
```

#### Returns

- [CCSGameRules](/docs/api/shared/schemadefinitions/ccsgamerules)? - Game rules entity. Nullable.

**GetRefEHandle<T>(T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L33)

```csharp
CHandle<T> GetRefEHandle<T>(T entity) where T : class, ISchemaClass<T>
```

#### Parameters

- **entity**: T - Entity instance.

#### Returns

- [CHandle](/docs/api/shared/natives/chandle-1)<T> - Reference entity handle to the entity.

#### Type Parameters

- **T**:  - Entity type.

