---
title: CAnimParameterManagerUpdater
---

# Interface CAnimParameterManagerUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimParameterManagerUpdater : ISchemaClass<CAnimParameterManagerUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimParameterManagerUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AutoResetMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L31)

```csharp
SchemaUntypedField AutoResetMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### AutoResetParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L28)

```csharp
ref CUtlVector<SchemaUntypedField> AutoResetParams { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### IdToIndexMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L21)

```csharp
SchemaUntypedField IdToIndexMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### IndexToHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L26)

```csharp
ref CUtlVector<CAnimParamHandle> IndexToHandle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)>

### NameToIndexMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L24)

```csharp
SchemaUntypedField NameToIndexMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Parameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimParameterManagerUpdater.cs#L18)

```csharp
ref CUtlVector<SchemaUntypedField> Parameters { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

