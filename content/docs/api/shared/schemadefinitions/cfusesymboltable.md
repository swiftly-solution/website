---
title: CFuseSymbolTable
---

```csharp
public interface CFuseSymbolTable : ISchemaClass<CFuseSymbolTable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ConstantMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L25)

```csharp
SchemaUntypedField ConstantMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Constants

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L18)

```csharp
ref CUtlVector<ConstantInfo_t> Constants { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ConstantInfo_t](/docs/api/shared/schemadefinitions/constantinfo_t)>

### FunctionMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L31)

```csharp
SchemaUntypedField FunctionMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Functions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L22)

```csharp
ref CUtlVector<FunctionInfo_t> Functions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FunctionInfo_t](/docs/api/shared/schemadefinitions/functioninfo_t)>

### VariableMap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L28)

```csharp
SchemaUntypedField VariableMap { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Variables

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuseSymbolTable.cs#L20)

```csharp
ref CUtlVector<VariableInfo_t> Variables { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[VariableInfo_t](/docs/api/shared/schemadefinitions/variableinfo_t)>

