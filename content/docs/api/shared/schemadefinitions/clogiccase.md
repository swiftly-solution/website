---
title: CLogicCase
---

```csharp
public interface CLogicCase : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicCase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Case

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L17)

```csharp
string Case { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LastShuffleCase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L21)

```csharp
ref int LastShuffleCase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnCase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L26)

```csharp
SchemaUntypedField OnCase { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnDefault

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L29)

```csharp
SchemaUntypedField OnDefault { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ShuffleCases

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L19)

```csharp
ref int ShuffleCases { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UchShuffleCaseMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicCase.cs#L23)

```csharp
ISchemaFixedArray<byte> UchShuffleCaseMap { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

