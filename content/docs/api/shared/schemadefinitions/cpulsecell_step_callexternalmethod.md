---
title: CPulseCell_Step_CallExternalMethod
---

```csharp
public interface CPulseCell_Step_CallExternalMethod : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Step_CallExternalMethod>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AsyncCallMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L25)

```csharp
ref PulseMethodCallMode_t AsyncCallMode { get; }
```

#### Property Value

- [PulseMethodCallMode_t](/docs/api/shared/schemadefinitions/pulsemethodcallmode_t)

### **ExpectedArgs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L23)

```csharp
SchemaUntypedField ExpectedArgs { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **GameBlackboard** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L20)

```csharp
SchemaUntypedField GameBlackboard { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **MethodName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L17)

```csharp
SchemaUntypedField MethodName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **OnFinished** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L27)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

