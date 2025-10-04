---
title: Command
---

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class Command : Attribute
```

#### Inheritance

#### Inherited Members

## Constructors

**Command(string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L9)

```csharp
public Command(string name, bool registerRaw = false)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L5)

```csharp
public string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**RegisterRaw** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAttribute.cs#L7)

```csharp
public bool RegisterRaw { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

