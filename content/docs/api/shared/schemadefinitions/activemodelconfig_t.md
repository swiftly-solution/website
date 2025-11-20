---
title: ActiveModelConfig_t
---

```csharp
public interface ActiveModelConfig_t : ISchemaClass<ActiveModelConfig_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AssociatedEntities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L22)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> AssociatedEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseModelEntity](/docs/api/shared/schemadefinitions/cbasemodelentity)>>

### AssociatedEntityNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L24)

```csharp
ref CUtlVector<SchemaUntypedField> AssociatedEntityNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### Handle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L18)

```csharp
ModelConfigHandle_t Handle { get; }
```

#### Property Value

- [ModelConfigHandle_t](/docs/api/shared/schemadefinitions/modelconfighandle_t)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L20)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AssociatedEntitiesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L28)

```csharp
void AssociatedEntitiesUpdated()
```

### AssociatedEntityNamesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L29)

```csharp
void AssociatedEntityNamesUpdated()
```

### HandleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L26)

```csharp
void HandleUpdated()
```

### NameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ActiveModelConfig_t.cs#L27)

```csharp
void NameUpdated()
```

