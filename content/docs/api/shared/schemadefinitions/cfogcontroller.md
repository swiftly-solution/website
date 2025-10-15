---
title: CFogController
---

```csharp
public interface CFogController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CFogController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChangedVariables

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L21)

```csharp
ref int ChangedVariables { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Fog

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L17)

```csharp
fogparams_t Fog { get; }
```

#### Property Value

- [fogparams_t](/docs/api/shared/schemadefinitions/fogparams_t)

### UseAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L19)

```csharp
ref bool UseAngles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### FogUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFogController.cs#L23)

```csharp
void FogUpdated()
```

