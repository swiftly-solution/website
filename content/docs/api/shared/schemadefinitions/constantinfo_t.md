---
title: ConstantInfo_t
---

```csharp
public interface ConstantInfo_t : ISchemaClass<ConstantInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstantInfo_t.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NameToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstantInfo_t.cs#L18)

```csharp
ref CUtlStringToken NameToken { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### **Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstantInfo_t.cs#L20)

```csharp
ref float Value { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

