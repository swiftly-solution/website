---
title: CPulse_Variable
---

```csharp
public interface CPulse_Variable : ISchemaClass<CPulse_Variable>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **DefaultValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L25)

```csharp
SchemaUntypedField DefaultValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Description** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L19)

```csharp
string Description { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **EditorNodeID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L33)

```csharp
PulseDocNodeID_t EditorNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### **IsObservable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L31)

```csharp
ref bool IsObservable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsPublicBlackboardVariable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L29)

```csharp
ref bool IsPublicBlackboardVariable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **KeysSource** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L27)

```csharp
ref PulseVariableKeysSource_t KeysSource { get; }
```

#### Property Value

- [PulseVariableKeysSource_t](/docs/api/shared/schemadefinitions/pulsevariablekeyssource_t)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L17)

```csharp
SchemaUntypedField Name { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulse_Variable.cs#L22)

```csharp
SchemaUntypedField Type { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

