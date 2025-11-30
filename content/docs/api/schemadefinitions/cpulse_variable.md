---
title: CPulse_Variable
---

# Interface CPulse_Variable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulse_Variable : ISchemaClass<CPulse_Variable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPulse_Variable>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L27)

```csharp
SchemaUntypedField DefaultValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Description

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L21)

```csharp
string Description { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EditorNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L35)

```csharp
PulseDocNodeID_t EditorNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### IsObservable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L33)

```csharp
ref bool IsObservable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPublicBlackboardVariable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L31)

```csharp
ref bool IsPublicBlackboardVariable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KeysSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L29)

```csharp
ref PulseVariableKeysSource_t KeysSource { get; }
```

#### Property Value

- [PulseVariableKeysSource_t](/docs/api/schemadefinitions/pulsevariablekeyssource_t)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L19)

```csharp
SchemaUntypedField Name { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L24)

```csharp
SchemaUntypedField Type { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

