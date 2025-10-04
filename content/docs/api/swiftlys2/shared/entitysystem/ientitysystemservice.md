---
title: IEntitySystemService
---

```csharp
public interface IEntitySystemService
```

## Methods

**CreateEntity<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L17)

```csharp
T CreateEntity<T>() where T : class, ISchemaClass<T>
```

#### Returns

- T - Created entity.

#### Type Parameters

- **T**:  - Entity type.

#### Exceptions

- [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception) - Thrown when failed to create entity by class or class doesn't have a designer name.

**CreateEntityByDesignerName<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L26)

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

**GetAllEntities()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L46)

```csharp
IEnumerable<CEntityInstance> GetAllEntities()
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)> - All entities.

**GetAllEntitiesByClass<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L53)

```csharp
IEnumerable<T> GetAllEntitiesByClass<T>() where T : class, ISchemaClass<T>
```

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by class.

#### Type Parameters

- **T**:  - Entity type.

**GetAllEntitiesByDesignerName<T>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L61)

```csharp
IEnumerable<T> GetAllEntitiesByDesignerName<T>(string designerName) where T : class, ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Designer name.

#### Returns

- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T> - All entities by designer name.

#### Type Parameters

- **T**:  - Entity type.

**GetEntityByIndex<T>(uint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L69)

```csharp
T? GetEntityByIndex<T>(uint index) where T : class, ISchemaClass<T>
```

#### Parameters

- **index**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32) - Entity index.

#### Returns

- T? - Entity by index. Nullable.

#### Type Parameters

- **T**:  - Entity type.

**GetGameRules()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L40)

```csharp
CCSGameRules? GetGameRules()
```

#### Returns

- [CCSGameRules](/docs/api/shared/schemadefinitions/ccsgamerules)? - Game rules entity. Nullable.

**GetRefEHandle<T>(T)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L34)

```csharp
CHandle<T> GetRefEHandle<T>(T entity) where T : class, ISchemaClass<T>
```

#### Parameters

- **entity**: T - Entity instance.

#### Returns

- [CHandle](/docs/api/shared/natives/chandle-1)<T> - Reference entity handle to the entity.

#### Type Parameters

- **T**:  - Entity type.

**HookEntityOutput<T>(string, EntityOutputHandler)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L93)

```csharp
Guid HookEntityOutput<T>(string outputName, IEntitySystemService.EntityOutputHandler callback) where T : class, ISchemaClass<T>
```

#### Parameters

- **outputName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the output to hook. This value cannot be <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> or empty.
- **callback**: [IEntitySystemService](/docs/api/shared/entitysystem/ientitysystemservice).[EntityOutputHandler](/docs/api/shared/entitysystem/ientitysystemservice/entityoutputhandler) - The callback function to invoke when the output is triggered. This value cannot be <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A <xref href="System.Guid" data-throw-if-not-resolved="false"></xref> that uniquely identifies the hook. This identifier can be used to manage or remove the hook.

#### Type Parameters

- **T**:  - The type of the entity, which must implement <xref href="SwiftlyS2.Shared.Schemas.ISchemaClass%601" data-throw-if-not-resolved="false"></xref>.

#### Remarks

**UnhookEntityOutput(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/IEntitySystem.cs#L99)

```csharp
void UnhookEntityOutput(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The unique identifier of the entity output to unhook.

