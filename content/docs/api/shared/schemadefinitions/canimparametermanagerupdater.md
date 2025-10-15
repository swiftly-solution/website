---
title: CAnimParameterManagerUpdater
---

```csharp
public interface CAnimParameterManagerUpdater : ISchemaClass<CAnimParameterManagerUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AutoResetMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L30)

```csharp
SchemaUntypedField AutoResetMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### AutoResetParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L27)

```csharp
ref CUtlVector<SchemaUntypedField> AutoResetParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### IdToIndexMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L20)

```csharp
SchemaUntypedField IdToIndexMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### IndexToHandle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L25)

```csharp
ref CUtlVector<CAnimParamHandle> IndexToHandle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)>

### NameToIndexMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L23)

```csharp
SchemaUntypedField NameToIndexMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Parameters

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L17)

```csharp
ref CUtlVector<SchemaUntypedField> Parameters { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

