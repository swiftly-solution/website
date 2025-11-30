---
title: Interface IEntitySystemService
---

# Interface IEntitySystemService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L8)

**Namespace**: [SwiftlyS2.Shared.EntitySystem](/docs/api/entitysystem)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IEntitySystemService
```

## Methods

### CreateEntity()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L17)

Create an entity by class.

```csharp
T CreateEntity<T>() where T : class, ISchemaClass<T>
```

#### Returns

- T - Created entity.

#### Type Parameters

- **T**:  - Entity type.

#### Exceptions

- [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) - Thrown when failed to create entity by class or class doesn't have a designer name.

### CreateEntityByDesignerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L26)

Create an entity by designer name.

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

### GetAllEntities()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L46)

Get all entities.

```csharp
IEnumerable<CEntityInstance> GetAllEntities()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CEntityInstance](/docs/api/schemadefinitions/centityinstance)> - All entities.

### GetAllEntitiesByClass()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L53)

Get all entities by class.

```csharp
IEnumerable<T> GetAllEntitiesByClass<T>() where T : class, ISchemaClass<T>
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by class.

#### Type Parameters

- **T**:  - Entity type.

### GetAllEntitiesByDesignerName(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L61)

Get all entities by designer name, and cast to type T.

```csharp
IEnumerable<T> GetAllEntitiesByDesignerName<T>(string designerName) where T : class, ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Designer name.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by designer name.

#### Type Parameters

- **T**:  - Entity type.

### GetEntityByIndex(uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L69)

Get an entity by index.

```csharp
T? GetEntityByIndex<T>(uint index) where T : class, ISchemaClass<T>
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32) - Entity index.

#### Returns

- T? - Entity by index. Nullable.

#### Type Parameters

- **T**:  - Entity type.

### GetGameRules()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L40)

Get the game rules entity.

```csharp
CCSGameRules? GetGameRules()
```

#### Returns

- [CCSGameRules](/docs/api/schemadefinitions/ccsgamerules)? - Game rules entity. Nullable.

### GetRefEHandle(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L34)

Get a reference handle to the entity.

```csharp
CHandle<T> GetRefEHandle<T>(T entity) where T : class, ISchemaClass<T>
```

#### Parameters

- **entity**: T - Entity instance.

#### Returns

- [CHandle](/docs/api/natives/chandlet)<T> - Reference entity handle to the entity.

#### Type Parameters

- **T**:  - Entity type.

### HookEntityOutput(string, EntityOutputHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L93)

Hooks an output of the specified entity type to a callback function.

```csharp
Guid HookEntityOutput<T>(string outputName, IEntitySystemService.EntityOutputHandler callback) where T : class, ISchemaClass<T>
```

#### Parameters

- **outputName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the output to hook. This value cannot be <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> or empty.
- **callback**: [IEntitySystemService](/docs/api/entitysystem/ientitysystemservice).[EntityOutputHandler](/docs/api/entitysystem/ientitysystemservice/entityoutputhandler) - The callback function to invoke when the output is triggered. This value cannot be <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A <xref href="System.Guid" data-throw-if-not-resolved="false"></xref> that uniquely identifies the hook. This identifier can be used to manage or remove the hook.

#### Type Parameters

- **T**:  - The type of the entity, which must implement <xref href="SwiftlyS2.Shared.Schemas.ISchemaClass%601" data-throw-if-not-resolved="false"></xref>.

#### Remarks

This method allows you to attach a handler to a specific output of an entity. The callback will
    be invoked whenever the output is triggered.

### UnhookEntityOutput(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L99)

Removes the association between the specified entity output and its handler.

```csharp
void UnhookEntityOutput(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique identifier of the entity output to unhook.

